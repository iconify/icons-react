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
		"content": `<style>.du6-lubmf {
  fill: currentColor;
  d: path("M7.549 15.932q.22-.221.22-.549t-.221-.547t-.55-.22t-.547.221t-.22.549t.221.548t.55.22t.547-.222M6.5 13.231h1V7.846h-1zm4 1.269h7v-1h-7zm0-4h7v-1h-7zM3 19V5h18v14z");
}
</style><path class="du6-lubmf"/>`,
		"fallback": "material-symbols-light:problem-sharp",
	});
}

export default Component;
