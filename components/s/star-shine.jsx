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
		"content": `<style>.i6jk6tayc {
  fill: currentColor;
  d: path("M20.896 18.008L18.608 15.7l.688-.688l2.308 2.288zM17.7 6.373l-.688-.688L19.3 3.396l.708.689zm-11.4.02L4.011 4.084l.689-.689l2.308 2.289zM3.085 18.007l-.689-.708l2.289-2.289l.707.689zM6.44 20l1.47-6.275L3 9.481l6.47-.548L12 3l2.55 5.933l6.47.548l-4.912 4.244L17.578 20L12 16.66z");
}
</style><path class="i6jk6tayc"/>`,
		"fallback": "material-symbols-light:star-shine",
	});
}

export default Component;
