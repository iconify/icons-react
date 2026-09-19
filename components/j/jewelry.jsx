import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_ete1bey.css';
import '../../css/s/s_3f_k18w.css';
import '../../css/z/zsls1eb-j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLixX0dQA"><g class="rohhhzb0l"><circle class="a_ete1bey"/><path class="s_3f_k18w"/><path class="zsls1eb-j"/></g></mask></defs><path mask="url(#SVGLixX0dQA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:jewelry",
	});
}

export default Component;
