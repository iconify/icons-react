import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mle__jblb.css';
import '../../css/j/jdj5abcnw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEMUkMeXq"><g class="v3_i3wktz"><path class="mle__jblb"/><path class="jdj5abcnw"/></g></mask></defs><path mask="url(#SVGEMUkMeXq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:tower-of-babel",
	});
}

export default Component;
