import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jmot6bbfp.css';
import '../../css/u/ubuh6kbkg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGihhyQbyX"><g class="aql7dnt-u"><rect class="jmot6bbfp"/><path class="ubuh6kbkg"/></g></mask></defs><path mask="url(#SVGihhyQbyX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shaving",
	});
}

export default Component;
