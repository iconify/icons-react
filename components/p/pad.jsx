import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2o_b7-ab.css';
import '../../css/l/lgj4kaccc.css';
import '../../css/e/eswq9z27o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaIsEZUpE"><g class="ft5dv1b6b"><path class="o2o_b7-ab"/><path class="lgj4kaccc"/><path class="eswq9z27o"/></g></mask></defs><path mask="url(#SVGaIsEZUpE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pad",
	});
}

export default Component;
