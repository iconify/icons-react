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

.kpq8zkb5x {
  stop-color: var(--svg-color--fdc85b, #fdc85b);
}

.p27cfgs0s {
  d: path("M4.535 3.799A1.38 1.38 0 0 1 5.78 3h13.83c1.03 0 1.705 1.125 1.238 2.081L18.756 9.43c-.226.462-.63.855-1.131.883h-2.436l-2.672 9.647A1.394 1.394 0 0 1 11.184 21h-3.78c-.911 0-1.575-.9-1.339-1.811a177 177 0 0 1 2.205-7.774c.585-1.817 2.453-2.227 4.236-2.227h1.226c-.326-.406-.888-.563-1.676-.563H4.39c-1.03 0-1.704-.99-1.237-1.946zM15.19 9.188h2.053a.56.56 0 0 0 .523-.36l1.542-3.938a.563.563 0 0 0-.523-.765H6.155a.56.56 0 0 0-.517.349l-.928 2.25a.562.562 0 0 0 .517.776h6.83c1.743 0 2.744.883 3.132 1.688m-1.502 1.124h-1.406c-1.164 0-2.306.338-2.694 1.553c-.675 2.11-1.508 5.383-2.003 7.29a.58.58 0 0 0 .551.72h2.61a.58.58 0 0 0 .546-.433z");
}

.xaz_tbb4z {
  stop-color: var(--svg-color--a811aa, #a811aa);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGTdUw8cPb)" class="p27cfgs0s"/><defs><linearGradient id="SVGTdUw8cPb" x1="6.116" x2="12.422" y1="4.44" y2="21.563" gradientUnits="userSpaceOnUse"><stop class="kpq8zkb5x"/><stop offset="1" class="xaz_tbb4z"/></linearGradient></defs></g>`,
		"fallback": "token-branded:taki",
	});
}

export default Component;
