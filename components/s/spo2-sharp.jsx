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
		"content": `<style>.q6onghgzy {
  fill: currentColor;
  d: path("M11.808 19v-5.384h3.884V19zm.884-.885h2.116V14.5h-2.116zm4.5 3.577v-3.134h3.039v-1.366h-3.039v-.884h3.924v3.134h-3.039v1.366h3.039v.884zm-7.769-.723q-2.806-.215-4.614-2.243Q3 16.698 3 13.8q0-2.154 1.738-4.765T10 3.308q2.512 2.204 4.122 4.204t2.301 3.719h-7z");
}
</style><path class="q6onghgzy"/>`,
		"fallback": "material-symbols-light:spo2-sharp",
	});
}

export default Component;
