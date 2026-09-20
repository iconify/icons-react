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
		"content": `<style>.hk5ieoz_m {
  fill: currentColor;
  d: path("M13 16c0-.711.149-1.387.416-2H6.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596C6.056 20.929 8.58 22 12 22q1.764 0 3.205-.38l-.346-1.731A5 5 0 0 1 13 16m4-8.995a5 5 0 1 0-10 0a5 5 0 0 0 10 0M22 16c0 1.38-.699 2.598-1.763 3.317l-.136.683h-4.2l-.137-.683A4 4 0 1 1 22 16m-5.9 5l.16.794A1.5 1.5 0 0 0 17.73 23h.54a1.5 1.5 0 0 0 1.472-1.206L19.9 21z");
}
</style><path class="hk5ieoz_m"/>`,
		"fallback": "fluent:person-lightbulb-24-filled",
	});
}

export default Component;
