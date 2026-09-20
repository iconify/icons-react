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
		"content": `<style>.yx-85lb8x {
  fill: var(--svg-color--e62058, #e62058);
  d: path("m5.7 21l4.082-7.426l-.743 6.414zm3.94-3.573l.505-4.417l5.41.71zm3.891-8.853l2.21 4.866l-5.447-.714zm1.155 1.826l2.738-1.37l-1.454 4.195zm-4.615 2.128L7.016 3l6.343 5.312zm6.909-1.312l.668-1.928l.652 3.144z");
}
</style><path class="yx-85lb8x"/>`,
		"fallback": "token-branded:songbird",
	});
}

export default Component;
