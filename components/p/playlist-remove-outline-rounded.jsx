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
		"content": `<style>.t_s0b_b-o {
  fill: currentColor;
  d: path("m17.096 18.708l-2.246 2.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L16.39 18l-2.247-2.246q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l2.246 2.246l2.246-2.246q.14-.14.344-.15t.364.15t.16.354t-.16.354L17.804 18l2.246 2.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16zm-13-3.208q-.213 0-.356-.143T3.596 15t.143-.357t.357-.143h6q.214 0 .357.143t.143.357t-.143.357t-.357.143zm0-4q-.213 0-.356-.143T3.596 11t.143-.357t.357-.143h10q.214 0 .357.143t.143.357t-.143.357t-.357.143zm0-4q-.213 0-.356-.143T3.596 7t.143-.357t.357-.143h10q.214 0 .357.143q.143.144.143.357t-.143.357q-.143.143-.357.143z");
}
</style><path class="t_s0b_b-o"/>`,
		"fallback": "material-symbols-light:playlist-remove-outline-rounded",
	});
}

export default Component;
