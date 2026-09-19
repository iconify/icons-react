import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79zg2bcx.css';
import '../../css/t/t698lab3y.css';
import '../../css/u/uc9z07bif.css';
import '../../css/a/a0t38xbxg.css';
import '../../css/z/zrc9apbsz.css';
import '../../css/v/vcjuwqbsb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z79zg2bcx"/><g class="t698lab3y"><path class="uc9z07bif"/><path class="a0t38xbxg"/></g><path class="zrc9apbsz"/><path class="vcjuwqbsb"/>`,
		"fallback": "devicon:shopware-wordmark",
	});
}

export default Component;
