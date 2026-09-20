import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t3gfpplgd {
  fill: currentColor;
  d: path("M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2M8.75 13.25a.75.75 0 0 0-.102 1.493l.102.007h10.5a.75.75 0 0 0 .102-1.493l-.102-.007z");
}
</style><path class="t3gfpplgd"/>`,
		"fallback": "fluent:subtract-circle-28-filled",
	});
}

export default Component;
