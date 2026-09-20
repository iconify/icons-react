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
		"content": `<style>.nqunpendk {
  fill: currentColor;
  d: path("M11 15c0-.35.06-.687.171-1H4.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22q.596 0 1.157-.043A3 3 0 0 1 11 21zM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10M12 15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1zm0 3a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1z");
}
</style><path class="nqunpendk"/>`,
		"fallback": "fluent:person-note-24-filled",
	});
}

export default Component;
