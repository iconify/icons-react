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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ggjya490r {
  d: path("M20.11 16.763a.155.155 0 0 1-.149-.122a.2.2 0 0 1 .001-.068a7.7 7.7 0 0 0 .244-1.928c0-4.383-3.674-7.94-8.206-7.94s-8.206 3.557-8.206 7.94c0 .667.085 1.313.244 1.928a.154.154 0 0 1-.149.19a.15.15 0 0 1-.132-.09a9 9 0 1 1 16.486 0a.15.15 0 0 1-.132.09M12 19.94a4.764 4.764 0 1 0 0-9.53a4.764 4.764 0 0 0 0 9.53");
}

.hfcbrhxzx {
  stop-color: var(--svg-color--21fa90, #21fa90);
}

.vzflefbnw {
  stop-color: var(--svg-color--07edfd, #07edfd);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGKeAUwcYJ)" class="ggjya490r"/><defs><linearGradient id="SVGKeAUwcYJ" x1="9.374" x2="9.374" y1="4.057" y2="9.071" gradientUnits="userSpaceOnUse"><stop class="vzflefbnw"/><stop offset="1" class="hfcbrhxzx"/></linearGradient></defs></g>`,
		"fallback": "token-branded:lunr",
	});
}

export default Component;
