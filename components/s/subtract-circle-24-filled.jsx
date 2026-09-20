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
		"content": `<style>.c2qyliopd {
  fill: currentColor;
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-4.25 9.25a.75.75 0 0 0-.102 1.493l.102.007h8.5a.75.75 0 0 0 .102-1.493l-.102-.007z");
}
</style><path class="c2qyliopd"/>`,
		"fallback": "fluent:subtract-circle-24-filled",
	});
}

export default Component;
