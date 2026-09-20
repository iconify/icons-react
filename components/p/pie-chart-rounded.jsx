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
		"content": `<style>.porc-6bnz {
  fill: currentColor;
  d: path("M13 11V2.1q3.575.375 6.038 2.85T21.9 11zm-1.975 10.875q-3.8-.375-6.363-3.2T2.1 12q0-3.875 2.563-6.7t6.362-3.2zm1.975 0v-8.9h8.9q-.35 3.575-2.838 6.063T13 21.875");
}
</style><path class="porc-6bnz"/>`,
		"fallback": "material-symbols:pie-chart-rounded",
	});
}

export default Component;
