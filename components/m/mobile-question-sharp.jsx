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
		"content": `<style>.z7-el9suy {
  fill: currentColor;
  d: path("M12.738 16.688q.312-.313.312-.738t-.312-.737T12 14.9t-.737.313t-.313.737t.313.738T12 17t.738-.312M11.25 13.8h1.5q0-.8.15-1.1t.9-1.05q.45-.45.75-.975t.3-1.125q0-1.275-.837-1.912T12 7q-1.1 0-1.825.613T9.15 9.1l1.35.55q.125-.425.475-.812T12 8.45t1.013.35t.337.8q0 .425-.25.763t-.6.687q-.875.75-1.062 1.175T11.25 13.8M5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="z7-el9suy"/>`,
		"fallback": "material-symbols:mobile-question-sharp",
	});
}

export default Component;
