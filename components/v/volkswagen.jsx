import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grs06_b9k.css';
import '../../css/z/zvpwxgbul.css';
import '../../css/a/aq8pp-buc.css';
import '../../css/b/b925a0-jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grs06_b9k"/><path class="zvpwxgbul"/><path class="aq8pp-buc"/><path class="b925a0-jy"/>`,
		"fallback": "lineicons:volkswagen",
	});
}

export default Component;
