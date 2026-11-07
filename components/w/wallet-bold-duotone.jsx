import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzylw2bqw.css';
import '../../css/k/kxpdd-d5x.css';
import '../../css/t/tcxp3ubtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzylw2bqw"/><path class="kxpdd-d5x"/><path class="tcxp3ubtd"/>`,
		"fallback": "solar:wallet-bold-duotone",
	});
}

export default Component;
