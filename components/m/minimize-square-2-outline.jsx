import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iguslbbqz.css';
import '../../css/s/sb6_ytb3v.css';
import '../../css/f/fr97ndbzp.css';
import '../../css/s/sut2fkboz.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iguslbbqz"/><path class="sb6_ytb3v"/><path class="fr97ndbzp"/><path class="sut2fkboz"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:minimize-square-2-outline",
	});
}

export default Component;
