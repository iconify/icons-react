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
		"content": `<style>.v8qy4vcow {
  fill: currentColor;
  d: path("M9.885 2.5q-.214 0-.357-.143q-.144-.144-.144-.357t.144-.357t.357-.143h4.23q.214 0 .357.143q.144.144.144.357t-.144.357q-.143.143-.356.143zm2.472 10.972q.143-.143.143-.356V8.885q0-.214-.143-.357q-.143-.144-.357-.144t-.357.144t-.143.357v4.23q0 .214.143.357q.143.144.357.144t.357-.144m-3.47 6.902q-1.454-.626-2.545-1.716t-1.716-2.545T4 13t.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l.738-.739q.14-.14.345-.15t.363.15t.16.354t-.16.354l-.738.738q.95 1.135 1.469 2.493T20 13q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21t-3.113-.626");
}
</style><path class="v8qy4vcow"/>`,
		"fallback": "material-symbols-light:timer-rounded",
	});
}

export default Component;
