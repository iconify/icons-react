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
		"content": `<style>.cd6d9rlkx {
  fill: currentColor;
  d: path("M14.27 18.116H9.5q-.26 0-.437-.178t-.179-.438t.178-.437t.438-.178h4.77q.268 0 .442-.174t.172-.442v-3.038q0-.27-.172-.442t-.443-.173H10.5q-.26 0-.437-.178T9.884 12t.178-.437t.438-.179h3.77q.268 0 .442-.173t.172-.442V7.731q0-.27-.172-.442t-.443-.173H9.5q-.26 0-.437-.178T8.884 6.5t.178-.437t.438-.178h4.77q.769 0 1.307.538t.539 1.308v3.054q0 .49-.305.853q-.305.362-.776.362q.47 0 .776.363q.305.362.305.853v3.053q0 .77-.539 1.308t-1.308.539");
}
</style><path class="cd6d9rlkx"/>`,
		"fallback": "material-symbols-light:timer-3-rounded",
	});
}

export default Component;
