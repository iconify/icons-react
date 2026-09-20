import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.beaf9ac8r {
  fill: var(--svg-color--fff, #fff);
  d: path("M24 0H0v24h24z");
}

.czu8ztbrl {
  fill: var(--svg-color--9f9fc1, #9f9fc1);
  d: path("M12 13.948a1.948 1.948 0 1 0 0-3.896a1.948 1.948 0 0 0 0 3.896");
}

.fcsddqbte {
  fill: var(--svg-color--7373a5, #7373a5);
  d: path("M12 16.296a4.296 4.296 0 1 0 0-8.593a4.296 4.296 0 0 0 0 8.593");
}

.ft5dv1b6b {
  fill: none;
}

.fx87hccbn {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.005 16.706L7.826 7.765H9.54l2.466 5.299l2.541-5.3h1.638z");
}

.gx7uby1jx {
  fill: var(--svg-color--2b2d78, #2b2d78);
  d: path("M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16");
}

.gxhpscdnt {
  fill: var(--svg-color--898bb4, #898bb4);
  d: path("M12 15.059a3.059 3.059 0 1 0 0-6.118a3.059 3.059 0 0 0 0 6.118");
}

.m6z8p8bkg {
  fill: var(--svg-color--b1b1cd, #b1b1cd);
  d: path("M12 12.913a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.ra6poigro {
  fill: var(--svg-color--434487, #434487);
  d: path("M12 18.833a6.833 6.833 0 1 0 0-13.666a6.833 6.833 0 0 0 0 13.666");
}

.xtg7u9bgv {
  fill: var(--svg-color--5c5d96, #5c5d96);
  d: path("M12 17.577a5.577 5.577 0 1 0 0-11.153a5.577 5.577 0 0 0 0 11.153");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="beaf9ac8r"/><path class="gx7uby1jx"/><path class="ra6poigro"/><path class="xtg7u9bgv"/><path class="fcsddqbte"/><path class="gxhpscdnt"/><path class="czu8ztbrl"/><path class="m6z8p8bkg"/><path class="fx87hccbn"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:versa-background",
	});
}

export default Component;
