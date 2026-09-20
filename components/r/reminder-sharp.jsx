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
		"content": `<style>.j3u4eq5jb {
  fill: currentColor;
  d: path("M6.692 9h1.5V7.5q0-.617-.441-1.059Q7.309 6 6.692 6t-1.058.441T5.192 7.5t.442 1.059T6.692 9m4.116 0q.617 0 1.058-.441q.442-.442.442-1.059t-.442-1.059Q11.425 6 10.808 6t-1.059.441T9.308 7.5V9zm-1.61 2.539H19V21H9.39l-5.734-7.594l.811-.887l3.725 1.873V10h-1.5q-1.038 0-1.769-.73t-.73-1.77t.73-1.77T6.693 5q.428 0 .81.146t.69.414V3h1.005v2.612q.33-.297.742-.454q.41-.158.868-.158q1.038 0 1.769.73t.73 1.77t-.73 1.77t-1.77.73H9.199z");
}
</style><path class="j3u4eq5jb"/>`,
		"fallback": "material-symbols-light:reminder-sharp",
	});
}

export default Component;
