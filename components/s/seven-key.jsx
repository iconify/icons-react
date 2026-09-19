import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/f/fjfazccww.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU9EQTbtr"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="fjfazccww"/></g></mask></defs><path mask="url(#SVGU9EQTbtr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seven-key",
	});
}

export default Component;
