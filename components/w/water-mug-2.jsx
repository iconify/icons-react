import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z18488k1e.css';
import '../../css/b/b920nbcec.css';
import '../../css/l/lemmo8spd.css';
import '../../css/l/ln97hhrca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z18488k1e"/><path class="b920nbcec"/><path class="lemmo8spd"/><path class="ln97hhrca"/></g>`,
		"fallback": "streamline-cyber-color:water-mug-2",
	});
}

export default Component;
