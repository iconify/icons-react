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
		"content": `<style>.jdakc-b4l {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.385v-6.77q0-.69.463-1.152T4.615 7h14.77q.69 0 1.152.463T21 8.616v6.769q0 .69-.463 1.153T19.385 17zm0-1h14.769q.23 0 .423-.192t.192-.423v-6.77q0-.23-.192-.423T19.385 8H4.615q-.23 0-.423.192T4 8.616v6.769q0 .23.192.423t.423.192M7.5 14.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zm7.707-.293q.293-.294.293-.707t-.293-.707t-.707-.293t-.707.293t-.293.707t.293.707t.707.293t.707-.293m3-3q.293-.293.293-.707t-.293-.707T17.5 9.5t-.707.293t-.293.707t.293.707t.707.293t.707-.293M4 16V8z");
}
</style><path class="jdakc-b4l"/>`,
		"fallback": "material-symbols-light:videogame-asset-outline",
	});
}

export default Component;
