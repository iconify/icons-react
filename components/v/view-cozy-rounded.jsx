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
		"content": `<style>.xvg0194xe {
  fill: currentColor;
  d: path("M5.616 10.5q-.691 0-1.153-.462T4 8.885v-3.27q0-.69.463-1.152T5.616 4h3.269q.69 0 1.153.463t.462 1.153v3.269q0 .69-.462 1.153t-1.153.462zm0 9.5q-.691 0-1.153-.462T4 18.384v-3.268q0-.691.463-1.153t1.153-.463h3.269q.69 0 1.153.463t.462 1.153v3.269q0 .69-.462 1.153T8.885 20zm9.5-9.5q-.691 0-1.153-.462T13.5 8.885v-3.27q0-.69.463-1.152T15.116 4h3.269q.69 0 1.153.463T20 5.616v3.269q0 .69-.462 1.153t-1.154.462zm0 9.5q-.691 0-1.153-.462t-.463-1.154v-3.268q0-.691.463-1.153t1.153-.463h3.269q.69 0 1.153.463T20 15.116v3.269q0 .69-.462 1.153T18.384 20z");
}
</style><path class="xvg0194xe"/>`,
		"fallback": "material-symbols-light:view-cozy-rounded",
	});
}

export default Component;
