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
		"content": `<style>.c9himobgx {
  fill: currentColor;
  d: path("M11.75 2a.75.75 0 0 1 .75.75v3.155l2.133-2.134a.75.75 0 1 1 1.061 1.061L12.5 8.026V11h2.974l3.194-3.194a.75.75 0 0 1 1.06 1.06L17.596 11h3.155a.75.75 0 0 1 0 1.5h-3.155l2.134 2.133a.75.75 0 1 1-1.061 1.061L15.474 12.5H12.5v2.974l3.194 3.194a.75.75 0 0 1-1.06 1.06L12.5 17.596v3.155a.75.75 0 0 1-1.5 0v-3.155L8.867 19.73a.75.75 0 1 1-1.061-1.061L11 15.474V12.5H8.026l-3.194 3.194a.75.75 0 0 1-1.06-1.06L5.904 12.5H2.75a.75.75 0 0 1 0-1.5h3.155L3.77 8.867a.75.75 0 0 1 1.061-1.061L8.026 11H11V8.026L7.806 4.832a.75.75 0 1 1 1.06-1.06L11 5.904V2.75a.75.75 0 0 1 .75-.75");
}
</style><path class="c9himobgx"/>`,
		"fallback": "fluent:weather-snowflake-24-regular",
	});
}

export default Component;
