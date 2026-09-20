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
		"content": `<style>.s3gmudtje {
  fill: currentColor;
  d: path("M3 17.77v-2.885h2.904v2.884zm7.077-2.616l-.688-.708l1.94-1.946H3v-1h8.329l-1.94-1.946l.688-.708L13.231 12zM3 9.116V6.212h2.904v2.904zM10.596 21v-3h1v1.385q0 .269.173.442t.443.173h7.173q.269 0 .442-.173t.173-.443V4.616q0-.27-.173-.443T19.385 4H12.21q-.269 0-.442.173t-.173.443V6h-1V3H21v4.817h.962v3.654H21V21z");
}
</style><path class="s3gmudtje"/>`,
		"fallback": "material-symbols-light:switch-access-3-outline",
	});
}

export default Component;
