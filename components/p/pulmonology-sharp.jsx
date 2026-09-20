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
		"content": `<style>.zyi786bis {
  fill: currentColor;
  d: path("M11.5 2.5h1v7.292l2.788 2.808l.781-.78l-2.448-2.493V5.5h4.195L21 13.921V20.5h-8V16l.4-3.892l-1.4-1.4l-1.42 1.419L11 16v4.5H3v-6.579L6.185 5.5h4.2v3.846L7.93 11.82l.78.781l2.79-2.809z");
}
</style><path class="zyi786bis"/>`,
		"fallback": "material-symbols-light:pulmonology-sharp",
	});
}

export default Component;
