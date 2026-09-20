import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p9jsaeb0v {
  fill: currentColor;
  d: path("M12.25 6.75a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0m-7 5.25A2.25 2.25 0 0 0 3 14.25v5.25a5.5 5.5 0 1 0 11 0v-5.25A2.25 2.25 0 0 0 11.75 12zm8.751-1.5a3.73 3.73 0 0 1-1.978-.563a4.73 4.73 0 0 0 1.228-3.187a4.73 4.73 0 0 0-1.228-3.187a3.75 3.75 0 1 1 1.978 6.937m1 3.75c0-.873-.344-1.666-.905-2.25h3.155a2.25 2.25 0 0 1 2.25 2.25v5.25a5.5 5.5 0 0 1-7.16 5.245a6.49 6.49 0 0 0 2.66-5.245zm2.522-4.314a3.75 3.75 0 1 0 0-6.372a4.73 4.73 0 0 1 1.228 3.186a4.73 4.73 0 0 1-1.228 3.186m.318 14.809a5.5 5.5 0 0 0 7.161-5.245v-5.25a2.25 2.25 0 0 0-2.25-2.25h-3.156c.56.584.905 1.377.905 2.25v5.25a6.49 6.49 0 0 1-2.66 5.245");
}
</style><path class="p9jsaeb0v"/>`,
		"fallback": "fluent:people-queue-28-filled",
	});
}

export default Component;
