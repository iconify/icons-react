import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iufyv-hoo.css';
import '../../css/p/p4qejibop.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVaE1edoH"><g class="aql7dnt-u"><path class="iufyv-hoo"/><path class="p4qejibop"/></g></mask></defs><path mask="url(#SVGVaE1edoH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paint",
	});
}

export default Component;
