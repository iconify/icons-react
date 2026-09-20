import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o7o05uyde {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm13 5.664V5.332l2.255-1.27a.5.5 0 0 1 .745.436V11.5a.5.5 0 0 1-.746.435zM7 13.75h3v.5A3.75 3.75 0 0 1 6.25 18H3.5a.5.5 0 0 1-.5-.5v-1.75a.5.5 0 0 1 .5-.5h2.75A.75.75 0 0 0 7 14.5z");
}
</style><path class="o7o05uyde"/>`,
		"fallback": "fluent:video-security-20-filled",
	});
}

export default Component;
