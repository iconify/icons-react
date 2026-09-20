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
		"content": `<style>.tpbs5hruc {
  fill: currentColor;
  d: path("M.5 13.27V5.4L5.4.5l.706.706l-.921 4.063H11.5v2.037l-2.59 5.963zm1-1h6.758L10.5 7.034v-.766H3.966l.83-3.738L1.5 5.816zM18.6 23.5l-.706-.706l.922-4.063H12.5v-2.037l2.59-5.963h8.41V18.6zm.604-2.03l3.296-3.285V11.73h-6.758L13.5 16.966v.765h6.535zM1.5 12.27V5.815zm21 5.915V11.73z");
}
</style><path class="tpbs5hruc"/>`,
		"fallback": "material-symbols-light:thumbs-up-down-outline-sharp",
	});
}

export default Component;
