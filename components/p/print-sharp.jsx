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
		"content": `<style>.hvv8imb0n {
  fill: currentColor;
  d: path("M6 7V3h12v4zm12 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M8 19h8v-4H8zm-2 2v-4H2V8h20v9h-4v4z");
}
</style><path class="hvv8imb0n"/>`,
		"fallback": "material-symbols:print-sharp",
	});
}

export default Component;
