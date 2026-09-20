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
		"content": `<style>.nn3ac1cqt {
  fill: currentColor;
  d: path("M14 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8M2 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M22.5 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-11.75 7A1.75 1.75 0 0 0 9 14.75V20a5 5 0 0 0 10 0v-5.25A1.75 1.75 0 0 0 17.25 13zM8 14.752l-4.703 1.26a1.75 1.75 0 0 0-1.237 2.144l.841 3.139a5 5 0 0 0 7.088 3.168A6 6 0 0 1 8 20zm10.012 9.71q.455.23.966.369a5 5 0 0 0 6.124-3.536l.841-3.14a1.75 1.75 0 0 0-1.237-2.143L20 14.752V20a6 6 0 0 1-1.988 4.462");
}
</style><path class="nn3ac1cqt"/>`,
		"fallback": "fluent:people-community-28-filled",
	});
}

export default Component;
