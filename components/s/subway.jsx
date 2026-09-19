import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkw7m-b3y.css';
import '../../css/i/if76pj62f.css';
import '../../css/i/izaosmbjp.css';
import '../../css/w/w72rrunhn.css';
import '../../css/j/jklb8bbel.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqTkagbKL"><g class="ft5dv1b6b"><rect class="wkw7m-b3y"/><circle class="if76pj62f"/><circle class="izaosmbjp"/><path class="w72rrunhn"/><path class="jklb8bbel"/></g></mask></defs><path mask="url(#SVGqTkagbKL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:subway",
	});
}

export default Component;
