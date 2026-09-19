import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e_iwscbqa.css';
import '../../css/p/pdoqb-fef.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHw5cAdII"><g class="aql7dnt-u"><circle class="e_iwscbqa"/><path class="pdoqb-fef"/></g></mask></defs><path mask="url(#SVGHw5cAdII)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:reduce-user",
	});
}

export default Component;
