import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jol1kjm1u.css';
import '../../css/f/fxwq1cqvv.css';
import '../../css/t/tcadmdbou.css';
import '../../css/t/ts72lmbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jol1kjm1u"/><path class="fxwq1cqvv"/><path class="tcadmdbou"/><path class="ts72lmbzc"/>`,
		"fallback": "solar:wallet-money-bold-duotone",
	});
}

export default Component;
