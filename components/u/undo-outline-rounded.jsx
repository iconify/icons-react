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
		"content": `<style>.v-2qmv4vl {
  fill: currentColor;
  d: path("M7.904 18q-.214 0-.357-.143t-.143-.357t.143-.357t.357-.143h6.754q1.556 0 2.65-1.067q1.096-1.067 1.096-2.606t-1.095-2.596q-1.096-1.058-2.651-1.058H6.916l2.611 2.611q.16.16.16.354t-.16.354t-.363.15q-.204-.01-.345-.15L5.565 9.74q-.13-.131-.183-.268q-.053-.136-.053-.298t.053-.298t.184-.267l3.253-3.254q.16-.16.354-.16t.354.16t.15.363t-.15.345l-2.611 2.61h7.742q1.963 0 3.355 1.354q1.39 1.354 1.39 3.3t-1.39 3.31T14.657 18z");
}
</style><path class="v-2qmv4vl"/>`,
		"fallback": "material-symbols-light:undo-outline-rounded",
	});
}

export default Component;
