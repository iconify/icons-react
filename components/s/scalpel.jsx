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
		"content": `<style>.aziwcobot {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.493 13.649q.013.094.002.188q-.011.095-.045.183q-.035.089-.09.166t-.128.139l-7.75 6.5l-.002.001q-.114.096-.257.14q-.142.044-.291.031q-.148-.014-.281-.083q-.132-.069-.227-.184q-1.203-1.443-.848-3.279q.356-1.841 2.195-3.278l4.233-3.735q.01-.01.021-.018q.073-.06.159-.1t.178-.057t.188-.011q.094.006.184.035l7.011-5.843q1.395-1.365 3.035.276q1.085 1.084-.156 2.946q-.06.091-.144.16z");
}
</style><path class="aziwcobot"/>`,
		"fallback": "uix-solid:scalpel",
	});
}

export default Component;
