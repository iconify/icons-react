import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/glzuhhbww.css';
import '../../css/l/lnr6n0bgh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvfl6ddBJ"><g class="aql7dnt-u"><path class="glzuhhbww"/><path class="lnr6n0bgh"/></g></mask></defs><path mask="url(#SVGvfl6ddBJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:minus-the-top",
	});
}

export default Component;
