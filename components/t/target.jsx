import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbp2n_b0d.css';
import '../../css/w/wyddhdbvg.css';
import '../../css/w/weozcygjy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbp2n_b0d"/><path class="wyddhdbvg"/><circle class="weozcygjy"/>`,
		"fallback": "foundation:target",
	});
}

export default Component;
