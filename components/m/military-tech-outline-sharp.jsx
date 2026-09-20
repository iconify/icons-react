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
		"content": `<style>.wyltl5bae {
  fill: currentColor;
  d: path("M7.385 2.577h9.23v8.185l-4.423 2.669l.739 2.377h2.877l-2.37 1.661l.931 2.916L12 18.573l-2.37 1.812l.931-2.916l-2.369-1.661h2.877l.739-2.377l-4.424-2.573zm1 1v6.08q0 .29.144.53t.394.394l2.577 1.508V3.577zm7.23 0H12.5v8.512l2.577-1.508q.25-.154.394-.394t.144-.53zM12.5 7.833");
}
</style><path class="wyltl5bae"/>`,
		"fallback": "material-symbols-light:military-tech-outline-sharp",
	});
}

export default Component;
