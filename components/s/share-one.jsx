import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tnc833_np.css';
import '../../css/a/ayj3gb6gy.css';
import '../../css/t/t-q_z3btq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5WDjaeZP"><g class="v3_i3wktz"><path class="tnc833_np"/><path class="ayj3gb6gy"/><path class="t-q_z3btq"/></g></mask></defs><path mask="url(#SVG5WDjaeZP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:share-one",
	});
}

export default Component;
