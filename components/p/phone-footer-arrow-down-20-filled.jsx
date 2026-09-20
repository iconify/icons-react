import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg-z03bnc {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 13.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m5.354-3.646l-2 2l-.003.002a.5.5 0 0 1-.348.144h-.006a.5.5 0 0 1-.35-.146l-2-2a.5.5 0 0 1 .707-.708L9.5 12.293V9.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708");
}
</style><path class="hg-z03bnc"/>`,
		"fallback": "fluent:phone-footer-arrow-down-20-filled",
	});
}

export default Component;
