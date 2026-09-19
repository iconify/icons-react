import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jpzgdqbjk.css';
import '../../css/o/opxuyt77v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlFDUzbMk"><g class="aql7dnt-u"><path class="jpzgdqbjk"/><path class="opxuyt77v"/></g></mask></defs><path mask="url(#SVGlFDUzbMk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shower-head",
	});
}

export default Component;
