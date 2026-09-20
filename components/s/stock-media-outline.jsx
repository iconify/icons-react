import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c_gnz0bcb {
  fill: currentColor;
  d: path("M4.616 14q-.691 0-1.153-.462T3 12.385v-7.77q0-.69.463-1.153T4.615 3h7.77q.69 0 1.152.463T14 4.615v7.77q0 .69-.462 1.152T12.385 14zm0-1h7.769q.269 0 .442-.173t.173-.442v-7.77q0-.269-.173-.442T12.385 4h-7.77q-.269 0-.442.173T4 4.616v7.769q0 .269.173.442t.443.173M8 11.75L6.8 10.1L5.385 12h6.23L9.7 9.5zm6.73 8.52Q14 19.537 14 18.5t.73-1.77T16.5 16q.448 0 .82.146t.68.413V11h3v1h-2v6.5q0 1.039-.73 1.77T16.5 21t-1.77-.73M4 13V4z");
}
</style><path class="c_gnz0bcb"/>`,
		"fallback": "material-symbols-light:stock-media-outline",
	});
}

export default Component;
