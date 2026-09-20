import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rq-mh2b_e {
  fill: currentColor;
  d: path("m9.992 10.7l4.154 4.154a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h4a2.5 2.5 0 0 0 2.492-2.3m.928-1.902l3.157 3.158c.508-.142.919-.6.919-1.206V5.252a1.25 1.25 0 0 0-1.96-1.028L10.9 5.698q.02.139.02.282zM5.12 3L10 7.879V5.5A2.5 2.5 0 0 0 7.5 3z");
}
</style><path class="rq-mh2b_e"/>`,
		"fallback": "fluent:video-off-16-filled",
	});
}

export default Component;
