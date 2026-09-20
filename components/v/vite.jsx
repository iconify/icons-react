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
		"content": `<style>.xa41frb-w {
  fill: var(--svg-color--007aff, #007aff);
  d: path("m3 7.725l5.625-1.35l-.563 14.063zm6.75-1.524L21 3.563L8.231 20.274L9.75 6.206z");
}
</style><path class="xa41frb-w"/>`,
		"fallback": "token-branded:vite",
	});
}

export default Component;
