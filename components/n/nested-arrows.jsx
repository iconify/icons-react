import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kcg668zpi.css';
import '../../css/k/k04dfjb8n.css';
import '../../css/e/e9olh2zok.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmZpjbeyA"><g class="aql7dnt-u"><path class="kcg668zpi"/><path class="k04dfjb8n"/><path class="e9olh2zok"/></g></mask></defs><path mask="url(#SVGmZpjbeyA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nested-arrows",
	});
}

export default Component;
